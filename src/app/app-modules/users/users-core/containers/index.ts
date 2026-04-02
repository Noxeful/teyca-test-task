import { UsersContainer } from '@users/users-core/containers/users-container/users-container';
import { ClientsContainer } from '@users/users-core/containers/clients-container/clients-container';
import { UsersSettingsContainer } from '@users/users-core/containers/users-settings-container/users-settings-container';

export const containers = [
  UsersContainer,
  ClientsContainer,
  UsersSettingsContainer,
];

export * from '@users/users-core/containers/users-container/users-container';
export * from '@users/users-core/containers/clients-container/clients-container';
export * from '@users/users-core/containers/clients-container/clients-container';
