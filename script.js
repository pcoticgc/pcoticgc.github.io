html, body {
    height: 100%;
    margin: 10;
    padding: 10;
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #a3eed5; 
}

.container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
}

.selector-container {
    width: 80%; 
    padding: 20px;
    box-sizing: border-box;
    background-color: #ffffff; 
    border-radius: 10px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    margin-bottom: 20px; 
}

#countrySelect {
    width: 50%; 
    padding: 10px;
    border: 2px solid #007bff; 
    border-radius: 5px;
    font-size: 16px; 
    color: #495057; 
    background-color: #e9ecef; 
}

#lifeExpectancyChart {
    width: 80%; 
    flex-grow: 1;
    box-sizing: border-box;
    background-color: #ffffff; 
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    padding: 20px; 
}


select, canvas {
    transition: all 0.3s ease;
}

/
#countrySelect:hover {
    border-color: #0056b3; 
    background-color: #dfe6e9; 
}


@media (max-width: 768px) {
    #countrySelect {
        width: 70%; 
    }

    .container, #lifeExpectancyChart {
        width: 95%; 
    }
}
