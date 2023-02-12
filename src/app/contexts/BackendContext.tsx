import { BaseAPI, Configuration, CratecontrollersauthenticationControllersApi } from "effort-visualizer-api-client";
import React, { createContext, useContext } from "react";

type ApiClients = {
    authApiClient: Omit<CratecontrollersauthenticationControllersApi, keyof BaseAPI>
};

const apiClients: ApiClients = {
    authApiClient: new CratecontrollersauthenticationControllersApi(new Configuration({
        basePath: process.env.BASE_BACKEND_PATH
    })),
};

const BackendContext = createContext(apiClients);

export const useBackend = () => useContext(BackendContext);

const BackendProvider = ({ value, children }: {
    value?: ApiClients,
    children: any
}) =>
    <BackendContext.Provider value={value ?? apiClients} >{children}</BackendContext.Provider>;

export default BackendProvider;
