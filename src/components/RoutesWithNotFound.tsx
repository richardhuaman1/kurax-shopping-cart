import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@/pages/404/NotFoundPage';

type RoutesWithNotFoundProps = {
  children: React.ReactNode;
};

export function RoutesWithNotFound({ children }: RoutesWithNotFoundProps) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
