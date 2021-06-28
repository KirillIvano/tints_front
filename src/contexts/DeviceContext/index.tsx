import {useState} from 'react';
import {createContext, useContext, useEffect} from 'react';

export type DeviceType = 'mobile' | 'desktop';
export const DeviceContext = createContext<DeviceType>('desktop');

export const useDeviceType = () => useContext(DeviceContext);

export const WithDeviceContext: React.FC = ({children}) => {
    const [currentDevice, setDevice] = useState<DeviceType>('mobile');

    useEffect(() => {
        const handleResize = () => {
            const size = window.innerWidth;

            if (size < 640) setDevice('mobile');
            else setDevice('desktop');
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <DeviceContext.Provider value={currentDevice}>
            {children}
        </DeviceContext.Provider>
    );
};
