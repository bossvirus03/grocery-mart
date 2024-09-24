import { TypeUserRole } from "../enums/enum";

export interface JwtPayload {
  userId: string;
  name: string;
  username: string;
  userTypes: TypeUserRole[];
  gender?: string;
  avatarUrl?: string;
  coverPhotoUrl?: string;
}
