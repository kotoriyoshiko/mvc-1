import $ from "jquery";
import "./reset.css";
import "./app1.css";
import "./app2.css";
import "./app3.css";
import "./app4.css";

let $button1 = $("#add1");
let $button2 = $("#minus1");
let $button3 = $("#mul2");
let $button4 = $("#divide2");
let $number = $("#number");

let n = localStorage.getItem("n");
$number.text(n || 100);

$button1.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});

$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});

let $tabBar = $(".tab-bar");
let $tabContent = $(".tab-content");

$tabBar.on("click", "li", (e) => {
  console.log("点击了");
  let $li = $(e.currentTarget)
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  let index = $li.index();
  console.log(index);
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger("click");

let $square = $("#app3 .square");

$square.on("click", () => {
  console.log("点击了");
  $square.toggleClass("active");
});

let $circle = $("#app4 .circle");

$circle
  .on("mouseenter", () => {
    console.log("进入了");
    $circle.addClass("active");
  })
  .on("mouseleave", () => {
    $circle.removeClass("active");
  });
