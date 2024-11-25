import { assign, type PromiseActorLogic, setup } from 'xstate';
import { Guest, GuestDetails, GetGuestsInput, GetGuestsOutput } from './types';

// Types
interface RsvpContext {
  code?: string;
  guests: Guest[];
  guestDetails?: GuestDetails[];
}

type RsvpEvent =
  | {
      type: 'SUBMIT_CODE';
      data: {
        code: string;
      };
    }
  | {
      type: 'SUBMIT_GUEST_DETAILS';
      data: {
        guestDetails: GuestDetails[];
      };
    }
  | {
      type: 'RETRY_CODE';
    };

type RsvpInput = {
  code?: string;
};

type RsvpActors = {
  getGuests: PromiseActorLogic<GetGuestsOutput, GetGuestsInput>;
};

export const rsvpMachine = setup({
  types: {} as {
    context: RsvpContext;
    events: RsvpEvent;
    input: RsvpInput;
  },
  actors: {} as RsvpActors,
}).createMachine({
  id: 'rsvp',
  initial: 'codeInputForm',
  context: ({ input }) => ({
    code: input.code,
    guests: [],
    guestDetails: undefined,
  }),
  states: {
    codeInputForm: {
      on: {
        SUBMIT_CODE: {
          target: 'getGuests',
          actions: assign({
            code: ({ event }) => event.data.code,
          }),
        },
      },
    },
    getGuests: {
      invoke: {
        src: 'getGuests',
        input: ({ context }) => ({
          code: context.code!,
        }),
        onDone: {
          target: 'gatherGuestDetails',
          actions: assign({
            guests: ({ event }) => event.output.guests,
          }),
        },
        onError: {
          target: 'error',
        },
      },
    },
    gatherGuestDetails: {
      on: {
        SUBMIT_GUEST_DETAILS: {
          target: 'success',
          actions: assign({
            guestDetails: ({ event }) => event.data.guestDetails,
          }),
        },
      },
    },
    success: {
      type: 'final',
    },
    error: {
      on: {
        RETRY_CODE: {
          target: 'codeInputForm',
        },
      },
    },
  },
});
