enum direction {
    foword,
    right,
    left,
    right_circle,
    left_circle,
    back,
    stop
}
enum whiteblack{
    black,
    white,
}

enum lotation{
    left,
    right,
}

enum kyori{
    short,
    long,
}

//% color="#3943c6" block="Eureka Maqueen" icon="\uf1b9"

namespace eureka_Maqueen {
    //% color="#3943c6" weight=70　blockId=moving1
    //% block="To|%sinkou_houkou|  |%time_sec|(sec) Power|%Power|" group="1　基本の動き"
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
    //% block="To|%sinkou_houkou|　Power|%Power|" group="1　基本の動き"
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

  //% color="#1E90FF" weight=51 blockId=wait_time1
  //% block="Wait time |%second|(sec) " group="1　基本の動き"
  export function wait_time1(second: number): void {
    basic.pause(second*1000);
  }

  //% color="#009A00" weight=20 block="Distance is |%nagasa| than |%limit|(cm)" group="3 超音波きょりｾﾝｻｰ"
  //% limit.min=5 limit.max=30
  export function sonar_ping_3( nagasa:kyori,limit: number): boolean {
    switch(nagasa){
        case kyori.short:
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < limit) {
        return true;
        } else {
        return false;
        }
        break;
        case kyori.long:
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < limit) {
        return false;
        } else {
        return true;
        }
        break;        
    }
  }

//% color="#6041f1"  weight=23 block="Only Right stepped on|%wb|" group="4　センサー" group="4 ﾌｫﾄﾘﾌﾚｸﾀｰ"
  export function photo_R_out( wb: whiteblack): boolean {
    switch(wb){
        case whiteblack.black:
            if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
            return true;
            } else {
            return false;
            }
        break;
        case whiteblack.white:
            if  ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
            return true;
            } else {
            return false;
            }
        break;
        }
    }


  //% color="#6041f1"  weight=24 block="Only Left stepped on|%wb|" group="4 ﾌｫﾄﾘﾌﾚｸﾀｰ" 
  export function photo_L_out( wb: whiteblack): boolean {

    switch(wb){
        case whiteblack.black:
            if  ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
            return true;
            } else {
            return false;
            }
        break;
        case whiteblack.white:
             if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
            return true;
            } else {
            return false;
            }                   
        break;
    }
  }
 
  //% color="#6041f1"  weight=25 block="Stepped on both sides|%wb|" group="4 ﾌｫﾄﾘﾌﾚｸﾀｰ"
  export function photo_LR_out(wb: whiteblack): boolean {
    switch(wb){
        case whiteblack.black:
             if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0))
             {
            return true;
            } else {
            return false;
            }
        break;
        case whiteblack.white:
             if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1))
             {
            return true;
            } else {
            return false;
            }
        break;
        }
    }

}




