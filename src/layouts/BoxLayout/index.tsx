import { AppShell, rem } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { memo } from 'react';
import classes from './index.module.css';

const BoxLayout: React.FC<ChildrenRouteProps> = ({ children }) => {
   const pinned = useHeadroom({ fixedAt: 120 });

   return (
      <div className={classes.bg}>
         <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
            <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
               {children}
            </AppShell.Main>
         </AppShell>
      </div>
   );
}

export default memo(BoxLayout)