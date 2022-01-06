import styled from '@emotion/styled';
import Theme from '@Types/pages/dashboard/settings/types';
export const DashboardCard = styled.div<Theme>`
  width: 160px;
  height: 160px;
  background: ${({ theme }) => theme && theme.backgroundColor.primary};
  border: 1px solid ${({ theme }) => theme && theme.borderColor};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;
export const DashboardCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
