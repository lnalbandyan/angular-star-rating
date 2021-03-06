export declare type starRatingSizes = 'small' | 'medium' | 'large';
export declare type starRatingColor = 'default' | 'negative' | 'ok' | 'positive';
export declare type starRatingSpeed = 'immediately' | 'noticeable' | 'slow';
export declare type starRatingPosition = 'left' | 'right' | 'top' | 'bottom';
export declare type starRatingStarTypes = 'svg' | 'icon' | 'image';
export declare type starRatingStarSpace = 'no' | 'between' | 'around';
export declare type starRatingDirection = 'rtl' | 'ltr';
export interface IStarRatingOnClickEvent {
    rating: number;
}
export interface IStarRatingOnRatingChangeEven {
    rating: number;
}
export interface IStarRatingIOnHoverRatingChangeEvent {
    hoverRating: number;
}
