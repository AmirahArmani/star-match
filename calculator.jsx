import { useState } from 'react'
import'./calculator.css'

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zodiac Harmony</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="form-container">
        <h2>Zodiac Compatibility</h2>
        <div class="form-group">
            <label for="sign1">Your Zodiac Sign:</label>
            <select id="sign1">
                <option value="1">Aries</option>
                <option value="2">Taurus</option>
                <option value="3">Gemini</option>
                <option value="4">Pisces</option>
                <option value="5">Aquarius</option>
                <option value="6">Capicorn</option>
                <option value="7">Cancer</option>
                <option value="8">Leo</option>
                <option value="9">Sagittarius</option>
                <option value="10">Libra</option>
                <option value="11">Scorpio</option>
                <option value="12">Virgo</option>
            </select>
        </div>
        <div class="form-group">
            <label for="sign2">Their Zodiac Sign:</label>
            <select id="sign2">
                <option value="1">Aries</option>
                <option value="2">Taurus</option>
                <option value="3">Gemini</option>
                <option value="4">Pisces</option>
                <option value="5">Aquarius</option>
                <option value="6">Capicorn</option>
                <option value="7">Cancer</option>
                <option value="8">Leo</option>
                <option value="9">Sagittarius</option>
                <option value="10">Libra</option>
                <option value="11">Scorpio</option>
                <option value="12">Virgo</option>
            </select>
        </div>
        <button onclick="checkCompatibility()">Check Compatibility</button>
        <div class="result" id="result"></div>
    </div>
    <script>
        function checkCompatibility() {
            var sign1 = document.getElementById("sign1").value;
            var sign2 = document.getElementById("sign2").value;
            var compatibility = Math.floor(Math.random() * 101); // Random number between 0 and 100
            document.getElementById("result").innerText = "Compatibility: " + compatibility + "%";
        }
    </script>

        export default checkCompatibility;
        </body>
</html>
