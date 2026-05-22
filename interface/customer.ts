export interface CustomerResponse {
  data: Customer[];
}

export type TierType = "diamond" | "platinum" | "gold" | "silver";

export interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  status: "active" | "inactive";
  birthday: string;
  gender: string;
  occupation: string;
  company: string;
  area: string;
  behaviorGroup: string;
  device: string;
  timePreference: string | null;
  venueTypes: string[];
  groupSize: number | null;
  advanceBooking: number | null;

  favoriteStyle: string;
  favoriteRestaurant: string;
  favoriteDish: string;

  orderCount: number;
  tier: TierType;
  interactionStage: number;
  interactionCount: number;

  credit: number;
  averageBill: number;
  frequency: number;

  firstOrder: string;
  lastOrder: string;

  cancelRate: number;
  returnRate: number;
  referralCount: number;

  process: CustomerProcess;
  outcome: CustomerOutcome;

  bookingPurpose: string[];
  bookingFor: string;

  preferredVibe: string[];
  favoriteFoods: string[];
  mustHaves: string[];
  requirements: string[];
  concerns: string[];

  recentBookings: RecentBooking[];

  createdAt: string;
  updatedAt: string;
}

export interface CustomerProcess {
  confirmationCount: number;
  lastConfirmation: string;

  personalizationCount: number;
  lastPersonalization: string;

  experienceCheckCount: number;
  lastExperienceCheck: string;

  nurturingCount: number;
  lastNurturing: string;

  insightUpdateCount: number;
  lastInsightUpdate: string;
}

export interface CustomerOutcome {
  chatResponseCount: number;
  lastChatResponse: string;

  rebookingCount: number;
  lastRebooking: string;

  positiveFeedbackCount: number;
  lastPositiveFeedback: string;

  proactiveContactCount: number;
  lastProactiveContact: string;

  returnUsageCount: number;
  lastReturnUsage: string;

  referralCount: number;
  lastReferral: string;
}

export interface RecentBooking {
  id: number;
  date: string;
  time: string;

  venue: string;
  type: string;
  area: string;

  guests: number;
  amount: number;

  status: "pending" | "completed" | "cancelled";

  notes: string;
  customerRequest: string;
  consultantAdvice: string;
  workingNote: string;

  cskh: BookingCSKH;
  outcome: BookingOutcome;
}

export interface BookingCSKH {
  sentConfirmation: boolean;
  sentMenuInfo: boolean;
  providedRecommendation: boolean;
  personalizedOpening: boolean;
  introducedRole: boolean;
  askedBeyondBooking: boolean;
  setExpectation: boolean;
}

export interface BookingOutcome {
  positiveFeedback: boolean;
  recognizedAsAssistant: boolean;
  customerInitiatedContact: boolean;
  repeatBooking: boolean;
  referredOthers: boolean;
  becameAdvocate: boolean;
}
