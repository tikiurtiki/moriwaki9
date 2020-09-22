<?php

require_once( dirname(__FILE__). '/stripe/init.php');

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_test_51HOYAKEzvO0IMjspaZIvj2GOs5OleDIemeVve2WBHRIpIwYkc94njOo2MiRw4BydZDkIaOQ3azHUA10r3iTFc7sE00dOzQ7OF4");

// Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
$token = $_POST['stripeToken'];
$email = $_POST['stripeEmail'];

// フォームから情報を取得:
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => 7000,
    "description" => "MORIWAKI Video",
    "currency" => "jpy",
    "source" => $token,
  ));
}catch (\Stripe\Error\Card $e) {
  // 決済失敗時の処理
  die('決済が完了しませんでした');
}

// 決済処理完了後に飛ばすページ
header('Location: https://moriwaki-video.netlify.app/thanks.html');
exit;

?>