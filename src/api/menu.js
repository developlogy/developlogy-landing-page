import { useMemo } from 'react';

// third-party
import useSWR, { mutate } from 'swr';

// project-imports
import { fetcher } from 'utils/axios';

const initialState = {
  isDashboardDrawerOpened: false,
  isComponentDrawerOpened: true
};

const staticMenuItem = {
  id: 'finance',
  title: 'finance',
  type: 'item',
  url: '/dashboard/finance',
  breadcrumbs: false
};

// ==============================|| API - MENU ||============================== //

const endpoints = {
  key: 'api/menu',
  master: 'master',
  dashboard: '/dashboard' // server URL
};

export function useGetMenu() {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key + endpoints.dashboard, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(() => {
    let updatedMenu = data?.dashboard;

    if (updatedMenu && Array.isArray(updatedMenu.children) && updatedMenu.children.length > 0) {
      updatedMenu = {
        ...updatedMenu,
        children: updatedMenu.children.map((group) => {
          if (Array.isArray(group.children)) {
            return {
              ...group,
              children: [...group.children, staticMenuItem]
            };
          }
          return group;
        })
      };
    }

    return {
      menu: updatedMenu,
      menuLoading: isLoading,
      menuError: error,
      menuValidating: isValidating,
      menuEmpty: !isLoading && !data?.length
    };
  }, [data, error, isLoading, isValidating]);

  return memoizedValue;
}

export function useGetMenuMaster() {
  const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      menuMaster: data,
      menuMasterLoading: isLoading
    }),
    [data, isLoading]
  );

  return memoizedValue;
}

export function handlerComponentDrawer(isComponentDrawerOpened) {
  // to update local state based on key

  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster) => {
      return { ...currentMenuMaster, isComponentDrawerOpened };
    },
    false
  );
}

export function handlerDrawerOpen(isDashboardDrawerOpened) {
  // to update local state based on key

  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster) => {
      return { ...currentMenuMaster, isDashboardDrawerOpened };
    },
    false
  );
}
