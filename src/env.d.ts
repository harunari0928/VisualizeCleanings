/// <reference types='vite/client' />

interface ImportMetaEnv {
    readonly VITE_GOOGLE_CLIENT_ID: string;
    readonly VITE_BASE_BACKEND_PATH: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
