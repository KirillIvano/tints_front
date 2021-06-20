import React, {createContext, useContext} from 'react';

export const DeviceContext = createContext<'mobile' | 'desktop'>('desktop');

// hooks
export const useDeviceType = () => useContext(DeviceContext);

// renders component for specific device
const createRenderForDeviceHOC = (selectedDevice: 'mobile' | 'desktop') =>
    <TProps extends Record<PropertyKey, unknown>>(Comp: React.ComponentType<TProps>) => {
        const DeviceBranch = (props: TProps) => {
            const device = useDeviceType();

            return device === selectedDevice ? <Comp {...props} /> : null;
        };

        return DeviceBranch;
    };

export const renderForMobileHOC = createRenderForDeviceHOC('mobile');
export const renderForDesktopHOC = createRenderForDeviceHOC('desktop');
