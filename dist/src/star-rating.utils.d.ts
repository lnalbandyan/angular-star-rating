import { starRatingColor } from "./star-rating-struct";
export declare class StarRatingUtils {
    /**
     * getStarsArray
     *
     * returns an array of increasing numbers starting at 1
     *
     * @param numOfStars
     * @returns {Array}
     */
    static getStarsArray(numOfStars: number): Array<number>;
    /**
     * getHalfStarVisible
     *
     * Returns true if there should be a half star visible, and false if not.
     *
     * @param rating
     * @returns {boolean}
     */
    static getHalfStarVisible(rating: number): boolean;
    /**
     * getColor
     *
     * The default function for color calculation
     * based on the current rating and the the number of stars possible.
     * If a staticColor is set the function will use it as return value.
     *
     * @param rating
     * @param numOfStars
     * @param staticColor
     * @returns {starRatingColor}
     */
    static getColor(rating: number, numOfStars: number, staticColor?: starRatingColor): starRatingColor;
    /**
     * isDigitKeyEventCode
     * detects digit key event sodes
     * @param eventCode
     * @returns {boolean}
     */
    static isDigitKeyEventCode: (eventCode: string) => boolean;
}
