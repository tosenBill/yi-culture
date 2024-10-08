/** 太极-->八卦 为二叉数结构 */
/** 使用0、1二进制(2的6次方)表示64卦，即000000 ----> 111111 */

// 阳
export const YANG =0
// 阴
export const YIN = 1
// 两仪
export const LIANG_YI = [0,1]
// 四象
export const SI_XIANG = [[0,0], [0,1], [1,0], [1,1] ]
/*** 母宫八卦 */
export const MOTHER_GUA = [
                            [0,0,0],[0,0,1],[0,1,0],[0,1,1],/** 乾（阳）、兑（阴）、离（阴）、震（阳）*/ 
                            [1,0,0],[1,0,1],[1,1,0],[1,1,1] /** 巽（阴）、坎（阳）、艮（阳）、坤（阴）*/
                          ] 
/** 五行 */
export const WU_XING = ['金', '木', '水', '火', '土']
/** 天干 */
export const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊','己', '庚', '辛', '壬', '癸']
/** 
 * @description 地支
 * @abstract '子', '寅', '辰', '午', '申', '戌' ----> 阳
 * @abstract '丑', '卯', '巳', '未', '酉', '亥' ----> 阴
 */
export const DI_ZHI = [
                        '子', '丑', '寅', '卯', '辰', '巳', 
                        '午', '未', '申', '酉', '戌', '亥'
                      ]
/**
 * @description 七杀
 * 七是天的尽数，阴阳的极气；十干中每隔七位就“相克相杀”，故名七杀；地支则每隔七位就相冲
 */
/** 
 * @description 六冲
 * 子午相冲、丑未相冲、寅申相冲、卯酉相冲、辰戌相冲、巳亥相冲
 */
/** 
 * @description 六合
 * 子丑合、寅亥合、‌卯戌合、辰酉合、巳申合、午未合
 */
/** 五行生克以链表结构表示 */
