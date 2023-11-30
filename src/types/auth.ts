enum UserStatus {
   'active',
   'blocked',
}

enum TokenType {
   'Bearer',
}

export interface UserInterface {
   id: string
   username: string
   firstName: string
   lastName: string
   status: UserStatus
   isSuperUser: boolean
   isEmailVerified: boolean
   email: string
   avatar: string
}

export interface TokenInterface {
   tokenType: TokenType
   accessToken: string
   accessTokenExpires: string
   refreshToken: string
}

export interface RoleInterface {
   name: string
   permissions: string[]
}

export interface AccessInterface {
   additionalPermissions: string[]
   roles: RoleInterface[]
}
