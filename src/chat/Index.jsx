import React, { useState, useEffect } from 'react';
import "./Index.css";

const ChatApp = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  


    let count = 0;
    // let count2 = count;
    const handleSendMessage = () => {
        const res_elm = document.createElement("div");
        const selfmessage = document.getElementById("msg_send").value;
        res_elm.innerHTML = selfmessage;
        res_elm.setAttribute("class", "right");
        res_elm.setAttribute("id", "right");
        document.getElementById("msg").appendChild(res_elm);
        document.getElementById("msg_send").value = "";
        setTimeout(() => {
            init();
        }, 1000);
        scroll();
    };
    function scroll() {
        var scrollMsg = document.getElementById("msg").scroll;
        scrollMsg = scrollMsg.scrollHeight;

    }

    function init() {
        count ++;
        scroll();
        let res_elml = document.createElement("div");
        var message = document.getElementById("msg_send").value;
        message = "";
        res_elml.innerHTML = data[count].name;
        res_elml.setAttribute("class", "left");
        document.getElementById("msg").appendChild(res_elml);
        // console.log(count);
    }

    return (
        <>
            <div id="main">
                <div id="chatbot">
                    <h2>ChatBot</h2>
                </div>

                <div className="" id="msg" >



                </div>
                <div className="input" id="input">
                    <input type="text" id="msg_send" placeholder="New Message"  />
                    <button className="send" id="reply" onClick={handleSendMessage}>Send <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div >
        </>
    );
};

export default ChatApp;
