export interface Review {
  name: string;
  selfRating: number;
  achievements: string;
  challenges: string;
  goals: string;
  feedback: string;
  dreamTeam: string;
  improvement: string;
}

export interface ReviewFormErrors {
  name?: string;
  achievements?: string;
  challenges?: string;
  goals?: string;
  feedback?: string;
  dreamTeam?: string;
  improvement?: string;
}
