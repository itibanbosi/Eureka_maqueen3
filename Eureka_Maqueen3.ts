enum direction {
    foword,
    right,
    left,
    right_circle,
    left_circle,
    back,
    stop
}

//% color="#3943c6" block="Eureka Maqueen" icon="\uf1b9"
namespace eureka_Maqueen {
    //% color="#3943c6" weight=70　blockId=moving1
    //% block="|%sinkou_houkou|へ |%time_sec|秒間進む 出力|%Power|" group="基本の動き"
    //% Power.min=0 Power.max=255
    export function car_derection_time(sinkou_houkou: direction, time_sec: number, Power: number): void {
        switch (sinkou_houkou) {
            case direction.foword:
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Power);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;


            case direction.left:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Power);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.right:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.right_circle:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.left_circle:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.back:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.stop:
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
        }
    }
    //% color="#3943c6" weight=70　blockId=moving2
    //% block="|%sinkou_houkou|へ 出力|%Power|" group="基本の動き"
    //% Power.min=0 Power.max=255
    export function car_derection(sinkou_houkou: direction, Power: number): void {
        switch (sinkou_houkou) {
            case direction.foword:
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Power);
                break;
            case direction.left:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Power);
                break;
            case direction.right:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                break;
            case direction.right_circle:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                break;
            case direction.left_circle:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                break;
            case direction.back:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                break;
            case direction.stop:
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
        }
    }




}



