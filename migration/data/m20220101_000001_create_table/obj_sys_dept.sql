/*
SQLyog Ultimate
MySQL - 10.6.5-MariaDB-1:10.6.5+maria~focal : Database - wk3
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Data for the table `sys_dept` */

insert  into `sys_dept`(`dept_id`,`parent_id`,`dept_name`,`order_num`,`leader`,`phone`,`email`,`status`,`created_by`,`updated_by`,`created_at`,`updated_at`,`deleted_at`) values 
('00UHIKGR9LVRU8A25NNILKEVH1','0','lingdu',1000,'若依','15888888888','ry@qq.com','1','00TV87DDOBJPU75J4TGUOC3NNG','00TV87DDOBJPU75J4TGUOC3NNG','2022-01-29 15:28:22','2022-02-08 22:13:19',NULL),
('00UHIM5OKSRTDIB6KVD4I6028B','00UHIKGR9LVRU8A25NNILKEVH1','A',1100,'A','13111111111','a@lingdu.com','1','00TV87DDOBJPU75J4TGUOC3NNG',NULL,'2022-01-29 15:29:22',NULL,NULL),
('00UHIN2T7EV32S1N2TNPD5DCBF','00UHIKGR9LVRU8A25NNILKEVH1','B',1200,'B','13222222222','b@lingdu.com','1','00TV87DDOBJPU75J4TGUOC3NNG',NULL,'2022-01-29 15:30:22',NULL,NULL),
('00UHIS2EBGP7OE3C2OM8O94B5I','00UHIM5OKSRTDIB6KVD4I6028B','A1',1101,'A1','13111111112','a1@lingdu.com','1','00TV87DDOBJPU75J4TGUOC3NNG',NULL,'2022-01-29 15:35:48',NULL,NULL),
('00UHISGODQLSC2NAPPCCDPPCFU','00UHIM5OKSRTDIB6KVD4I6028B','A2',1102,'A2','13212111111','a2@qq.com','1','00TV87DDOBJPU75J4TGUOC3NNG',NULL,'2022-01-29 15:36:18',NULL,NULL),
('00UHJ53P8BEO1PD8RR5UDE13D9','00UHIN2T7EV32S1N2TNPD5DCBF','B1',1201,'B1','13411111111','b1@qq.com','1','00TV87DDOBJPU75J4TGUOC3NNG',NULL,'2022-01-29 15:45:41',NULL,NULL),
('00UHJ5G81JD66SKRP4N81CETAD','00UHIN2T7EV32S1N2TNPD5DCBF','B2',1201,'B2','13244444444','b2@qq.com','1','00TV87DDOBJPU75J4TGUOC3NNG',NULL,'2022-01-29 15:46:06',NULL,NULL),
('00UHJBKMECPRD3MMB6VO4U9EH4','00UHIN2T7EV32S1N2TNPD5DCBF','B3',1203,'B3','13232221144','B3@qq.com','1','00TV87DDOBJPU75J4TGUOC3NNG',NULL,'2022-01-29 15:52:49',NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
