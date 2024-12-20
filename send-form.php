<?php
require_once('phpmailer/PHPMailerAutoload.php');

$fname            = $_REQUEST['name'];       
$cname            = $_REQUEST['cname'];
$email            = $_REQUEST['email'];
$phone            = $_REQUEST['contactno'];  
$message          = $_REQUEST['message'];

if($email  != '')
{	  
	$subject = "Website Form Filled by: ".$fname;    
	
	$todaydisp = date("d-m-Y");
    	
    $message='<table width="900" border="0" align="center" cellpadding="0" cellspacing="0" style="border:1px solid #e2e2e2; font-family:Arial, Helvetica, sans-serif; font-size:12px;">
     <tr>
      <td valign="top" style="padding:20px;">
      <table width="100%" border="0" cellspacing="2" cellpadding="2" style="background-color:#fff;">     
     
      <tr>
        <td width="17%" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;"><strong>Name:</strong></td>
        <td width="83%" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$fname.'</td>
      </tr>
      <tr>
        <td width="17%" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;"><strong>Company:</strong></td>
        <td width="83%" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$cname.'</td>
      </tr>    
     
     <tr>
        <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;"><strong>Email:</strong></td>
        <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$email.'</td>
      </tr>
     <tr>
        <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;"><strong>Phone:</strong></td>
        <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$phone.'</td>
      </tr>
       <tr>
        <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;"><strong>Message:</strong></td>
        <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$message.'</td>
      </tr>
     <tr>
       <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;"><strong>Date:</strong></td>
       <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$todaydisp.'</td>
     </tr>
    </table>
       </td>
     </tr>
    </table>';
    //echo $message;
    //exit;
       if($email!=''){
        // smpt email settings
        $mail = new \PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPDebug = 0;
        $mail->SMTPAuth = 'login';
        $mail->SMTPSecure = 'ssl';
        $mail->Host = 'cs3.webhostbox.net';
        $mail->Port = 465;
        $mail->Username = 'noreply@dsadvisor.in';
        $mail->Password = 'H!ren@2020';
        $mail->SetFrom('noreply@dsadvisor.in', 'NoReply DSA');
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->IsHTML(true);
        $mail->AddAddress('contact@dsadvisor.in');
        //$mail->AddAddress('nileshsoni@gmail.com');
        $mail->AddCC('darshil@dsadvisor.in');
        //$mail->AddBCC('contact@nilson.in');
        $mail->Send();	
            
        $rurl=$siteurl."thank-you.html";
        header("Location:$rurl");		
        exit;
       }   
} 
?>