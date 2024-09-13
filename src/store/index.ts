import { create } from 'zustand';

type Store = {
  accessToken: string | null;
  userName: string | null;
  type: string | null;
  isRemember: boolean;
  login: (token: string, userName: string, type: string, isRemember: boolean) => void;
  logout: () => void;
};

export const useStore = create<Store>((set) => ({
  accessToken: localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken'),
  userName: localStorage.getItem('userName') || sessionStorage.getItem('userName'),
  type: localStorage.getItem('type') || sessionStorage.getItem('type'),
  isRemember: localStorage.getItem('accessToken') !== null,

  login: (token: string, userName: string, type: string, isRemember: boolean) => {
    if (isRemember) {
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userName', userName);
      localStorage.setItem('type', type);
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('userName');
      sessionStorage.removeItem('type');
    } else {
      sessionStorage.setItem('accessToken', token);
      sessionStorage.setItem('userName', userName);
      sessionStorage.setItem('type', type);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('type');
    }
    set({ accessToken: token, userName: userName, type: type, isRemember: isRemember });
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('type');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('type');
    set({ accessToken: null, userName: null, type: null, isRemember: false });
  }
}));

type ApiStore = {
  baseUrl: string;
  isLoading: boolean;
  isRemember: boolean;
};

export const useApiStore = create<ApiStore>(() => ({
   baseUrl: 'https://upload-unity-game-server-i4vm7jekoa-de.a.run.app',
   isLoading: true,
   isRemember: false,  
}));
