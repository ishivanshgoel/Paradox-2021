const mailHtml = (name)=>{
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="x-apple-disable-message-reformatting" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black" /><meta name="format-detection" content="telephone=no" /><title></title><link href="https://fonts.google.com/specimen/Rajdhani?preview.text_type=custom" rel="stylesheet" type="text/css" /><style type="text/css">
/* Resets */
.ReadMsgBody { width: 100%; background-color: #ebebeb;}
.ExternalClass {width: 100%; background-color: #ebebeb;}
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height:100%;}
a[x-apple-data-detectors]{
color:inherit !important;
text-decoration:none !important;
font-size:inherit !important;
font-family:inherit !important;
font-weight:inherit !important;
line-height:inherit !important;
}
body {-webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
body {margin:0; padding:0;}
.yshortcuts a {border-bottom: none !important;}
.rnb-del-min-width{ min-width: 0 !important; }
/* Add new outlook css start */
.templateContainer{
max-width:590px !important;
width:auto !important;
}
/* Add new outlook css end */
/* Image width by default for 3 columns */
img[class="rnb-col-3-img"] {
max-width:170px;
}
/* Image width by default for 2 columns */
img[class="rnb-col-2-img"] {
max-width:264px;
}
/* Image width by default for 2 columns aside small size */
img[class="rnb-col-2-img-side-xs"] {
max-width:180px;
}
/* Image width by default for 2 columns aside big size */
img[class="rnb-col-2-img-side-xl"] {
max-width:350px;
}
/* Image width by default for 1 column */
img[class="rnb-col-1-img"] {
max-width:550px;
}
/* Image width by default for header */
img[class="rnb-header-img"] {
max-width:590px;
}
/* Ckeditor line-height spacing */
.rnb-force-col p, ul, ol{margin:0px!important;}
.rnb-del-min-width p, ul, ol{margin:0px!important;}
/* tmpl-2 preview */
.rnb-tmpl-width{ width:100%!important;}
/* tmpl-11 preview */
.rnb-social-width{padding-right:15px!important;}
/* tmpl-11 preview */
.rnb-social-align{float:right!important;}
/* Ul Li outlook extra spacing fix */
li{mso-margin-top-alt: 0; mso-margin-bottom-alt: 0;}
/* Outlook fix */
table {mso-table-lspace:0pt; mso-table-rspace:0pt;}
/* Outlook fix */
table, tr, td {border-collapse: collapse;}
/* Outlook fix */
p,a,li,blockquote {mso-line-height-rule:exactly;}
/* Outlook fix */
.msib-right-img { mso-padding-alt: 0 !important;}
@media only screen and (min-width:590px){
/* mac fix width */
.templateContainer{width:590px !important;}
}
@media screen and (max-width: 360px){
/* yahoo app fix width "tmpl-2 tmpl-10 tmpl-13" in android devices */
.rnb-yahoo-width{ width:360px !important;}
}
@media screen and (max-width: 380px){
/* fix width and font size "tmpl-4 tmpl-6" in mobile preview */
.element-img-text{ font-size:24px !important;}
.element-img-text2{ width:230px !important;}
.content-img-text-tmpl-6{ font-size:24px !important;}
.content-img-text2-tmpl-6{ width:220px !important;}
}
@media screen and (max-width: 480px) {
td[class="rnb-container-padding"] {
padding-left: 10px !important;
padding-right: 10px !important;
}
/* force container nav to (horizontal) blocks */
td.rnb-force-nav {
display: inherit;
}
/* fix text alignment "tmpl-11" in mobile preview */
.rnb-social-text-left {
width: 100%;
text-align: center;
margin-bottom: 15px;
}
.rnb-social-text-right {
width: 100%;
text-align: center;
}
}
@media only screen and (max-width: 600px) {
/* center the address &amp; social icons */
.rnb-text-center {text-align:center !important;}
/* force container columns to (horizontal) blocks */
th.rnb-force-col {
display: block;
padding-right: 0 !important;
padding-left: 0 !important;
width:100%;
}
table.rnb-container {
width: 100% !important;
}
table.rnb-btn-col-content {
width: 100% !important;
}
table.rnb-col-3 {
/* unset table align="left/right" */
float: none !important;
width: 100% !important;
/* change left/right padding and margins to top/bottom ones */
margin-bottom: 10px;
padding-bottom: 10px;
/border-bottom: 1px solid #eee;/
}
table.rnb-last-col-3 {
/* unset table align="left/right" */
float: none !important;
width: 100% !important;
}
table.rnb-col-2 {
/* unset table align="left/right" */
float: none !important;
width: 100% !important;
/* change left/right padding and margins to top/bottom ones */
margin-bottom: 10px;
padding-bottom: 10px;
/border-bottom: 1px solid #eee;/
}
table.rnb-col-2-noborder-onright {
/* unset table align="left/right" */
float: none !important;
width: 100% !important;
/* change left/right padding and margins to top/bottom ones */
margin-bottom: 10px;
padding-bottom: 10px;
}
table.rnb-col-2-noborder-onleft {
/* unset table align="left/right" */
float: none !important;
width: 100% !important;
/* change left/right padding and margins to top/bottom ones */
margin-top: 10px;
padding-top: 10px;
}
table.rnb-last-col-2 {
/* unset table align="left/right" */
float: none !important;
width: 100% !important;
}
table.rnb-col-1 {
/* unset table align="left/right" */
float: none !important;
width: 100% !important;
}
img.rnb-col-3-img {
/*max-width:none !important;*/
width:100% !important;
}
img.rnb-col-2-img {
/*max-width:none !important;*/
width:100% !important;
}
img.rnb-col-2-img-side-xs {
/*max-width:none !important;*/
width:100% !important;
}
img.rnb-col-2-img-side-xl {
/*max-width:none !important;*/
width:100% !important;
}
img.rnb-col-1-img {
/*max-width:none !important;*/
width:100% !important;
}
img.rnb-header-img {
/*max-width:none !important;*/
width:100% !important;
margin:0 auto;
}
img.rnb-logo-img {
/*max-width:none !important;*/
width:100% !important;
}
td.rnb-mbl-float-none {
float:inherit !important;
}
.img-block-center{text-align:center !important;}
.logo-img-center
{
float:inherit !important;
}
/* tmpl-11 preview */
.rnb-social-align{margin:0 auto !important; float:inherit !important;}
 /* tmpl-11 preview */
.rnb-social-center{display:inline-block;}
/* tmpl-11 preview */
.social-text-spacing{margin-bottom:0px !important; padding-bottom:0px !important;}
/* tmpl-11 preview */
.social-text-spacing2{padding-top:15px !important;}
/* UL bullet fixed in outlook */
ul {mso-special-format:bullet;}
}@media screen{body{font-family:'rajdhani','Arial',Helvetica,sans-serif;}}</style><!--[if gte mso 11]><style type="text/css">table{border-spacing: 0; }table td {border-collapse: separate;}</style><![endif]--><!--[if !mso]><!--><style type="text/css">table{border-spacing: 0;} table td {border-collapse: collapse;}</style> <!--<![endif]--><!--[if gte mso 15]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><body>

<table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" class="main-template" bgcolor="#071326" style="background-image: url(https://img.mailinblue.com/3570407/images/rnb/original/6055d96780e45d59f62f5ba6.png); background-position: center top; background-size: auto; background-repeat: repeat-y; background-color: rgb(255, 255, 255);">

    <tbody><tr>
        <td align="center" valign="top">
        <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="590" style="width:590px;">
                        <tr>
                        <td align="center" valign="top" width="590" style="width:590px;">
                        <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="590" class="templateContainer" style="max-width:590px!important; width: 590px;">
        <tbody><tr>

        <td align="center" valign="top">

            <div style="background-color: transparent; border-radius: 0px;">
                
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_1" id="Layout_1">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top" style="min-width:590px;">
                        <a href="#" name="Layout_1"></a>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="transparent" style="background-color: transparent; border-radius: 0px; padding-left: 0px; padding-right: 0px; border-collapse: separate;">
                            <tbody><tr>
                                <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td valign="top" class="rnb-container-padding" align="left">
                                    <table width="100%" cellpadding="0" border="0" align="center" cellspacing="0">
                                        <tbody><tr>
                                            <td valign="top" align="center">
                                                <table cellpadding="0" border="0" align="center" cellspacing="0" class="logo-img-center"> 
                                                    <tbody><tr>
                                                        <td valign="middle" align="center" style="line-height: 1px;">
                                                            <div style="border-top:0px None #9c9c9c;border-right:0px None #9c9c9c;border-bottom:0px None #9c9c9c;border-left:0px None #9c9c9c;display:inline-block; " cellspacing="0" cellpadding="0" border="0"><div><img width="434" vspace="0" hspace="0" border="0" alt="" style="float: left;max-width:434px;display:block;" class="rnb-logo-img" src="https://img.mailinblue.com/3570407/images/rnb/original/6055c8d11a23f83c480367e2.png"></div></div></td>
                                                    </tr>
                                                </tbody></table>
                                                </td>
                                        </tr>
                                    </tbody></table></td>
                            </tr>
                            <tr>
                                <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            <!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
            
        </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_3938" id="Layout_3938">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_3938"></a>
                        <table width="100%" cellpadding="0" border="0" height="38" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="38">
                                    <img width="20" height="38" style="display:block; max-height:38px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: transparent;">
                
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;" name="Layout_35" id="Layout_35">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width: 590px;">
                        <a href="#" name="Layout_35"></a>
                        <table width="100%" class="rnb-container" cellpadding="0" border="0" bgcolor="transparent" align="center" cellspacing="0" style="background-color: transparent;">
                            <tbody><tr>
                                <td valign="top" align="center">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                            <td>
                                                <div style="border-radius:5px; width:378;;max-width:378px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 0px;">
                                                    <div><img ng-if="col.img.source != 'url'" border="0" hspace="0" vspace="0" width="378" class="rnb-header-img" alt="" style="display:block; float:left; border-radius: 5px; " src="https://img.mailinblue.com/3570407/images/rnb/original/6069daa32126a5248c28e5d1.jpg"></div><div style="clear:both;"></div>
                                                    </div></td>
                                        </tr>
                                    </tbody></table>

                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr></tbody></table>
            <!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
            
        </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_10162" id="Layout_10162">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_10162"></a>
                        <table width="100%" cellpadding="0" border="0" height="38" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="38">
                                    <img width="20" height="38" style="display:block; max-height:38px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: transparent; border-radius: 0px;">
            
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:100%;" name="Layout_31">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top">
                        <a href="#" name="Layout_31"></a>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="transparent" style="background-color: transparent; padding-left: 0px; padding-right: 0px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                                        <tbody><tr>
                                            <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="rnb-container-padding" align="left">

                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                                    <tbody><tr>
                                                        <th class="rnb-force-col" style="text-align: left; font-weight: normal; padding-right: 0px;" valign="top">

                                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%" align="left" class="rnb-col-1">

                                                                <tbody><tr>
                                                                    <td style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858;"><div><span style="font-size:18px;"><span style="color:#FFF0F5;"><strong>&nbsp;Dear</strong>&nbsp;</span></span><span style="font-size:17px;"><strong><span style="color:#FFF0F5;"><span style="font-size:18px;">${name}</span></span></strong> </span></div>
</td>
                                                                </tr>
                                                                </tbody></table>

                                                            </th></tr>
                                                </tbody></table></td>
                                        </tr>
                                        <tr>
                                            <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                        </tr>
                                    </tbody></table>
                    </td>
                </tr>
            </tbody></table><!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->

            </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: transparent;">
                
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;" name="Layout_40" id="Layout_40">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width: 590px;">
                        <a href="#" name="Layout_40"></a>
                        <table width="100%" class="rnb-container" cellpadding="0" border="0" bgcolor="transparent" align="center" cellspacing="0" style="background-color: transparent;">
                            <tbody><tr>
                                <td valign="top" align="center">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                            <td>
                                                <div style="border-radius:5px; width:590;;max-width:891px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 0px;">
                                                    <div><img ng-if="col.img.source != 'url'" border="0" hspace="0" vspace="0" width="590" class="rnb-header-img" alt="" style="display:block; float:left; border-radius: 5px; " src="https://img.mailinblue.com/3570407/images/rnb/original/6069f29a9ecd207bff5cb6c7.png"></div><div style="clear:both;"></div>
                                                    </div></td>
                                        </tr>
                                    </tbody></table>

                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr></tbody></table>
            <!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
            
        </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_5290" id="Layout_5290">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_5290"></a>
                        <table width="100%" cellpadding="0" border="0" height="38" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="38">
                                    <img width="20" height="38" style="display:block; max-height:38px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: transparent; border-radius: 0px;">
                
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_16" id="Layout_16">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top" style="min-width:590px;">
                        <a href="#" name="Layout_16"></a>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mso-button-block rnb-container" style="background-color: transparent; border-radius: 0px; padding-left: 20px; padding-right: 20px; border-collapse: separate;">
                            <tbody><tr>
                                <td height="14" style="font-size:1px; line-height:14px; mso-hide: all;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td valign="top" class="rnb-container-padding" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                        <tbody><tr>
                                            <th class="rnb-force-col" valign="top">

                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" width="550" align="center" class="rnb-col-1">

                                                    <tbody><tr>
                                                        <td valign="top">
                                                            <table cellpadding="0" border="0" align="center" cellspacing="0" class="rnb-btn-col-content" style="margin:auto; border-collapse: separate;">
                                                                <tbody><tr>
                                                                    <td width="auto" valign="middle" bgcolor="#0092ff" align="center" height="40" style="font-size:18px; font-family:Arial,Helvetica,sans-serif; color:#ffffff; font-weight:normal; padding-left:20px; padding-right:20px; vertical-align: middle; background-color:#0092ff;border-radius:4px;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                                <a style="text-decoration:none; color:#ffffff; font-weight:normal;" target="_blank" href="https://paradox21.tech/">Visit Paradox Website</a>
                                                                            </span>
                                                                    </td>
                                                                </tr></tbody></table>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                                </th>
                                        </tr>
                                    </tbody></table></td>
                            </tr>
                            <tr>
                                <td height="14" style="font-size:1px; line-height:14px; mso-hide: all;">&nbsp;</td>
                            </tr>
                        </tbody></table>

                    </td>
                </tr>
            </tbody></table>
            <!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
                
            </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_9311" id="Layout_9311">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width:590px;">
                        <a href="#" name="Layout_9311"></a>
                        <table width="100%" cellpadding="0" border="0" height="38" cellspacing="0">
                            <tbody><tr>
                                <td valign="top" height="38">
                                    <img width="20" height="38" style="display:block; max-height:38px; max-width:20px;" alt="" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: transparent;">
                
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;" name="Layout_41" id="Layout_41">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width: 590px;">
                        <a href="#" name="Layout_41"></a>
                        <table width="100%" class="rnb-container" cellpadding="0" border="0" bgcolor="transparent" align="center" cellspacing="0" style="background-color: transparent;">
                            <tbody><tr>
                                <td valign="top" align="center">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                            <td>
                                                <div style="border-radius:5px; width:590;;max-width:707px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 0px;">
                                                    <div><img ng-if="col.img.source != 'url'" border="0" hspace="0" vspace="0" width="590" class="rnb-header-img" alt="" style="display:block; float:left; border-radius: 5px; " src="https://img.mailinblue.com/3570407/images/rnb/original/6069f298752cf754415e449b.jpg"></div><div style="clear:both;"></div>
                                                    </div></td>
                                        </tr>
                                    </tbody></table>

                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr></tbody></table>
            <!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
            
        </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: rgb(19, 26, 44);">
                
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
                <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;" name="Layout_25" id="Layout_25">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" style="min-width: 590px;">
                        <a href="#" name="Layout_25"></a>
                        <table width="100%" class="rnb-container" cellpadding="0" border="0" bgcolor="#131A2C" align="center" cellspacing="0" style="background-color: rgb(19, 26, 44);">
                            <tbody><tr>
                                <td valign="top" align="center">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody><tr>
                                            <td>
                                                <div style="border-radius:5px; width:590;;max-width:1140px !important;border-top:0px None #9c9c9c;border-right:0px None #9c9c9c;border-bottom:0px None #9c9c9c;border-left:0px None #9c9c9c;border-collapse: separate;border-radius: 0px;">
                                                    <div><img ng-if="col.img.source != 'url'" border="0" hspace="0" vspace="0" width="590" class="rnb-header-img" alt="" style="display:block; float:left; border-radius: 5px; " src="https://img.mailinblue.com/3570407/images/rnb/original/60576bee42ffb27342316a3a.jpg"></div><div style="clear:both;"></div>
                                                    </div></td>
                                        </tr>
                                    </tbody></table>

                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr></tbody></table>
            <!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
            
        </div></td>
    </tr><tr>

        <td align="center" valign="top">

            <div style="background-color: transparent;">
                
                <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px;" name="Layout_5" id="Layout_5">
                    <tbody><tr>
                        <td class="rnb-del-min-width" align="center" valign="top" bgcolor="transparent" style="min-width: 590px; background-color: transparent;">
                            <a href="#" name="Layout_5"></a>
                            <table width="590" class="rnb-container" cellpadding="0" border="0" align="center" cellspacing="0">
                                <tbody><tr>
                                    <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td valign="top" class="rnb-container-padding" style="font-size: 14px; font-family: 'rajdhani','Arial',Helvetica,sans-serif; color: #888888;" align="left">

                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                            <tbody><tr>
                                                <th class="rnb-force-col" style="padding-right:20px; padding-left:20px; mso-padding-alt: 0 0 0 20px; font-weight: normal;" valign="top">

                                                    <table border="0" valign="top" cellspacing="0" cellpadding="0" width="264" align="left" class="rnb-col-2 rnb-social-text-left" style="border-bottom:0;">

                                                        <tbody><tr>
                                                            <td valign="top">
                                                                <table cellpadding="0" border="0" align="left" cellspacing="0" class="rnb-btn-col-content">
                                                                    <tbody><tr>
                                                                        <td valign="middle" align="left" style="font-size:14px; font-family:'rajdhani','Arial',Helvetica,sans-serif; color:#888888; line-height: 16px" class="rnb-text-center">
                                                                            <div><div>
<div>&nbsp;</div>
</div>
</div>
                                                                        </td></tr>
                                                                </tbody></table>
                                                            </td>
                                                        </tr>
                                                        </tbody></table>
                                                    </th><th ng-if="item.text.align=='left'" class="rnb-force-col rnb-social-width" valign="top" style="mso-padding-alt: 0 20px 0 0; padding-right: 15px;">

                                                    <table border="0" valign="top" cellspacing="0" cellpadding="0" width="246" align="right" class="rnb-last-col-2">

                                                        <tbody><tr>
                                                            <td valign="top">
                                                                <table cellpadding="0" border="0" cellspacing="0" class="rnb-social-align" style="float: right;" align="right">
                                                                    <tbody><tr>
                                                                        <td valign="middle" class="rnb-text-center" ng-init="width=setSocialIconsBlockWidth(item)" width="85" align="right">
                                                                            <div class="rnb-social-center">
                                                                            <table align="left" style="float:left; display: inline-block" border="0" cellpadding="0" cellspacing="0">
                                                                            <tbody><tr>
                                                                                    <td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                            <span style="color:#ffffff; font-weight:normal;">
                                                                                <a target="_blank" href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/"><img alt="LinkedIn" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="https://img.mailinblue.com/new_images/rnb/theme2/rnb_ico_in.png"></a></span>
                                                                            </td></tr></tbody></table>
                                                                            </div><div class="rnb-social-center">
                                                                            <table align="left" style="float:left; display: inline-block" border="0" cellpadding="0" cellspacing="0">
                                                                            <tbody><tr>
                                                                                    <td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                            <span style="color:#ffffff; font-weight:normal;">
                                                                                <a target="_blank" href="https://www.instagram.com/comsoc.vitcc/"><img alt="Instagram" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="https://img.mailinblue.com/new_images/rnb/theme2/rnb_ico_ig.png"></a></span>
                                                                            </td></tr></tbody></table>
                                                                            </div></td>
                                                                    </tr>
                                                                </tbody></table>
                                                            </td>
                                                        </tr>
                                                        </tbody></table>
                                                    </th></tr>
                                        </tbody></table></td>
                                </tr>
                                <tr>
                                    <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                            </tbody></table>

                        </td>
                    </tr></tbody></table>
                
            </div></td>
    </tr></tbody></table>
            <!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
        </tr>
        </tbody></table>

</body></html>
  `

}

module.exports = mailHtml