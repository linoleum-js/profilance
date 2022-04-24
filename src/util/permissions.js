import Role from '../models/Role';

export const canPost = (role) => role === Role.USER;
export const canApprove = (role) => role === Role.ADMIN;
export const canSeeUnapproved = (role) => role !== Role.GUEST;
