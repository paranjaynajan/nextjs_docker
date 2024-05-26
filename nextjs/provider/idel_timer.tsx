import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { IIdleTimer, useIdleTimer } from "react-idle-timer";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";

interface ProviderProps {
  children: ReactNode;
  idleTimer?: IIdleTimer;

}

export const timerContext = createContext<IIdleTimer | any>({});

export const Providercontext: React.FC<ProviderProps> = React.memo(
  ({ children, idleTimer }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const nav = useNavigate();
    const localIdleTimer = useIdleTimer({
      timeout: 1000*60*15, //time to open modal
      promptBeforeIdle: 5000, //time for navigation
      onPrompt: () => {
        //to open modal
        setIsModalOpen(true);

      },
      onIdle: () => {
        // Log the user out
        localStorage.clear()
        nav("/");
      },
    });

    // for getting the remember me
    const rememberMeString: string | null = localStorage.getItem('rememberMe');
    const rememberMeValue: boolean = rememberMeString ? JSON.parse(rememberMeString) : false;

    useEffect(() => {
      console.log(rememberMeValue,"rememberMeValue")
      if (!rememberMeValue) {
        localIdleTimer.pause();
        console.log('pause');
      } else {
        localIdleTimer.resume();
        console.log('resume');
      }
    }, [rememberMeValue]);

    const closeModal = (): void => {
      setIsModalOpen(false);
    };
    return (
      <timerContext.Provider value={localIdleTimer}>
        <Modal isOpen={isModalOpen} onClose={closeModal} >
            Your session has expired
        </Modal>
        {children}
      </timerContext.Provider>
    );
  }
);
