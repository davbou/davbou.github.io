import { State } from './state';
import { GameType, Weather, Terrain } from './data/interface';
export declare class Field implements State.Field {
    gameType: GameType;
    weather?: Weather;
    terrain?: Terrain;
    isMagicRoom: boolean;
    isWonderRoom: boolean;
    isGravity: boolean;
    isAuraBreak?: boolean;
    isFairyAura?: boolean;
    isDarkAura?: boolean;
    isBeadsOfRuin?: boolean;
    isSwordOfRuin?: boolean;
    isTabletsOfRuin?: boolean;
    isVesselOfRuin?: boolean;
    attackerSide: Side;
    defenderSide: Side;
    constructor(field?: Partial<State.Field>);
    hasWeather(...weathers: Weather[]): boolean;
    hasTerrain(...terrains: Terrain[]): boolean;
    swap(): this;
    clone(): Field;
}
export declare class Side implements State.Side {
    spikes: number;
    steelsurge: boolean;
    vinelash: boolean;
    wildfire: boolean;
    cannonade: boolean;
    volcalith: boolean;
    isSR: boolean;
    isReflect: boolean;
    isLightScreen: boolean;
    isDefCheered: boolean;
    isProtected: boolean;
    isSeeded: boolean;
    isForesight: boolean;
    isTailwind: boolean;
    isHelpingHand: boolean;
    isAtkCheered: boolean;
    isFlowerGift: boolean;
    isFriendGuard: boolean;
    friendGuards: number;
    isAuroraVeil: boolean;
    isBattery: boolean;
    isPowerSpot: boolean;
    powerSpots: number;
    steelySpirits: number;
    isSwitching?: 'out' | 'in';
    isCharged: boolean;
    constructor(side?: State.Side);
    clone(): Side;
}
