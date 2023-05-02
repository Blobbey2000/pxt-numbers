//% color="#0CDDF9"
//% icon="\uf162"
//% blockGap=8
//% groups="["1-9", "Other", "10"]"
namespace Numbers {

    //% block
    //% group="1-9"
    //% weight=90
    export function one() {
        return 1;
    }

    //% block
    //% group="1-9"
    //% weight=80
    export function two() {
        return 2;
    }

    //% block
    //% group="1-9"
    //% weight=70
    export function three() {
        return 3;
    }

    //% block
    //% group="1-9"
    //% weight=60
    export function four() {
        return 4;
    }

    //% block
    //% group="1-9"
    //% weight=50
    export function five() {
        return 5;
    }

    //% block
    //% group="1-9"
    //% weight=40
    export function six() {
        return 6;
    }

    //% block
    //% group="1-9"
    //% weight=30
    export function seven() {
        return 7;
    }

    //% block
    //% group="1-9"
    //% weight=20
    export function eight() {
        return 8;
    }

    //% block
    //% group="1-9"
    //% weight=10
    export function nine() {
        return 9;
    }

    //% block
    //% group="10"
    //% weight=9.5
    export function ten() {
        return 10;
    }

    //% block="$multiplier hundred"
    //% group="Other"
    //% weight=9
    export function hundred(multiplier: number) {
        return multiplier * 100;
    }

    //% block="$multiplier thousand"
    //% group="Other"
    //% weight=8
    export function thousand(multiplier: number) {
        return multiplier * 1000;
    }

    //% block="$multiplier million"
    //% group="Other"
    //% weight=7
    export function million(multiplier: number) {
        return multiplier * 1000000;
    }

    //% block="$multiplier googol"
    //% group="Other"
    //% weight=1
    export function googol(multiplier: number) {
        return multiplier * 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
    }

}