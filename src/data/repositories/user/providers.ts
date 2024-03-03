import { UserLoginUseCase } from '@domain/use-cases/user/login.usecase';
import { UserRegisterUseCase } from '@domain/use-cases/user/registration.usecase';
import { GetUserProfileUseCase } from '@domain/use-cases/user/get-profile.usecase';
import { UserRepository } from '@domain/repositories/user.repository';
import { UserImplementationRepository } from './implementation';

const getUserProfileUseCaseProvider = {
  provide: GetUserProfileUseCase,
  useFactory: (userRepo: UserRepository) => new GetUserProfileUseCase(userRepo),
  deps: [UserRepository],
};
const userLoginUseCaseProvider = {
  provide: UserLoginUseCase,
  useFactory: (userRepo: UserRepository) => new UserLoginUseCase(userRepo),
  deps: [UserRepository],
};
const userRegisterUseCaseProvider = {
  provide: UserRegisterUseCase,
  useFactory: (userRepo: UserRepository) => new UserRegisterUseCase(userRepo),
  deps: [UserRepository],
};

const userProviders = [
  getUserProfileUseCaseProvider,
  userLoginUseCaseProvider,
  userRegisterUseCaseProvider,
  { provide: UserRepository, useClass: UserImplementationRepository },
];

export default userProviders;
