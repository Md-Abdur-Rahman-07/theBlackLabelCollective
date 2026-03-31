<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Helper function to sanitize inputs
function sanitize_input($input) {
    return htmlspecialchars(trim($input));
}

// Function to check for mixed-case words
function has_mixed_case($input) {
    $input = trim($input); // Remove extra spaces

    // Allow fully uppercase, fully lowercase, numbers, and single uppercase words
    if (ctype_upper($input) || ctype_lower($input) || preg_match('/^[A-Z][a-z]+$/', $input) || is_numeric($input)) {
        return false;
    }

    // Reject mixed uppercase/lowercase combinations
    return preg_match('/[A-Z][a-z]+[A-Z]|[a-z]+[A-Z]/', $input);
}

// Function to check if input contains "Texas" in any valid variation
function contains_texas($input) {
    return preg_match('/\b(TX|Tx|tx|texas|TEXAS|Texas)\b/', $input);
}

// Get and sanitize form data
$fields = ['type', 'name', 'phone', 'email', 'datetime', 'passanger', 'pickup', 'dropoff', 'long', 'addTrip', 'add'];
$data = [];

foreach ($fields as $field) {
    $data[$field] = isset($_POST[$field]) ? sanitize_input($_POST[$field]) : '';
}

// Validate required fields
$required_fields = ['type', 'name', 'phone', 'email', 'datetime', 'passanger', 'pickup', 'dropoff', 'long'];

foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        header("Location: ../index.html?type=error&message=Please fill in all required fields.");
        exit;
    }
}



// Check for mixed-case words
foreach ($data as $key => $value) {
    if (!empty($value) && has_mixed_case($value)) {
        header("Location: ../index.html?type=error&message=Requirements not met.");
        exit;
    }
}

// Email recipients
$adminEmails = [
"eshan.ar07@gmail.com",

    "info@theblacklabelcollective.co",
    "jahleellaurent@theblacklabelcollective.co"

];

// Email content
$subjectAdmin = "New Quote Request from {$data['name']}";
$bodyAdmin = "
    <p><strong>Type:</strong> {$data['type']}</p>
    <p><strong>Full Name:</strong> {$data['name']}</p>
    <p><strong>Phone Number:</strong> {$data['phone']}</p>
    <p><strong>Email:</strong> {$data['email']}</p>
    <p><strong>Date & Time:</strong> {$data['datetime']}</p>
    <p><strong>Number of Passengers:</strong> {$data['riders']}</p>
    <p><strong>Pickup Location:</strong> {$data['pickup']}</p>
    <p><strong>Dropoff Location:</strong> {$data['dropoff']}</p>
    <p><strong>Length:</strong> {$data['long']}</p>
    <p><strong>Additional Trip Info:</strong> {$data['addTrip']}</p>
    <p><strong>Additional Notes:</strong> {$data['add']}</p>
";

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'hist.ht05@gmail.com';
    $mail->Password = 'artxvgcumdiqzzur';
    // $mail->Username = 'topnotchtransportandlogistics@gmail.com';
    // $mail->Password = 'gsdwaguzeuffrnei';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Sender
    $mail->setFrom('hist.ht05@gmail.com', 'The Black Label Collective,');

    // Add Admin Recipients
    foreach ($adminEmails as $adminEmail) {
        $mail->addAddress($adminEmail);
    }

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = $subjectAdmin;
    $mail->Body = $bodyAdmin;

    // Send Email to Admin
    if ($mail->send()) {
        // Confirmation Email to User
        $mail->clearAddresses();
        $mail->addAddress($data['email']);
        $mail->Subject = "We Received Your Request";
        $mail->Body = "
            <h3>Hi {$data['name']},</h3>
            <p>Thank you for reaching out!</p>        
            <p>Our team will contact you shortly. If you have any questions, feel free to contact us.</p>
            <p>Best Regards,<br>The Black Label Collective Team.</p>
        ";

        $mail->send();

        // Redirect on success
        header("Location: ../index.html?type=success&message=Your form has been submitted successfully!");
        exit;
    } else {
        throw new Exception("Admin email failed to send.");
    }
} catch (Exception $e) {
    error_log("Mailer Error: " . $mail->ErrorInfo);
    header("Location: ../index.html?type=error&message=Something went wrong. Please try again.");
    exit;
}
?>
