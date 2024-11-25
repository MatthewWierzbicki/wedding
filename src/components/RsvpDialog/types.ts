export interface Guest {
  firstName: string;
  lastName: string;
}

export interface GuestDetails {
  firstName: string;
  lastName: string;
  isAttending: boolean;
  dietaryRestrictions: string;
}

// Actor types
export type GetGuestsInput = {
  code: string;
};

export type GetGuestsOutput = {
  guests: Guest[];
};
