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
黒,
白,
}

enum lotation{
    左,
    右,
}
enum car_LED_onoff{
    無効,
    有効,
}

enum kyori{
    短い,
    長い,
}

enum light_sensor{
    暗い,
    明るい,
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

  //% color="#1E90FF" weight=51 blockId=wait_time1
  //% block="待ち時間 |%second| （秒) " group="2　基本の動き"
  export function wait_time1(second: number): void {
    basic.pause(second*1000);
  }

  //% color="#009A00" weight=20 block="きょりが |%limit| cmより |%nagasa| " group="3 超音波きょりｾﾝｻｰ"
  //% limit.min=0 limit.max=30
  export function sonar_ping_3(limit: number ,nagasa:kyori): boolean {
    switch(nagasa){
        case kyori.短い:
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < limit) {
        return true;
        } else {
        return false;
        }
        break;
        case kyori.長い:
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < limit) {
        return false;
        } else {
        return true;
        }
        break;        
    }
  }

//% color="#6041f1"  weight=23 block="右だけが |%wb| をふんだ時 " group="4　センサー" group="4 ﾌｫﾄﾘﾌﾚｸﾀｰ"
  export function photo_R_out( wb: whiteblack): boolean {
    switch(wb){
        case whiteblack.黒:
            if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
            return true;
            } else {
            return false;
            }
        break;
        case whiteblack.白:
            if  ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
            return true;
            } else {
            return false;
            }
        break;
        }
    }
  }

  //% color="#6041f1"  weight=24 block="左だけが |%wb| をふんだ時 " group="4 ﾌｫﾄﾘﾌﾚｸﾀｰ" 
  export function photo_L_out( wb: whiteblack): boolean {

    switch(wb){
        case whiteblack.黒:
            if  ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
            return true;
            } else {
            return false;
            }
        break;
        case whiteblack.白:
             if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
            return true;
            } else {
            return false;
            }                   
        break;
    }
  }
 
  //% color="#6041f1"  weight=25 block="左右とも |%wb| をふんでいる時  " group="4 ﾌｫﾄﾘﾌﾚｸﾀｰ"
  export function photo_LR_out(wb: whiteblack): boolean {
    switch(wb){
        case whiteblack.黒:
             if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1))
             {
            return true;
            } else {
            return false;
            }
        break;
        case whiteblack.白:
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

}



