import { ChatAiService } from "Frontend/generated/endpoints";
import React, { useState } from "react";

export default function Chat() {
    const [question, setQuestion] = useState<string|undefined>("");
    const [rseponse, setResponse] = useState<string|undefined>("");

    async function send() {
        ChatAiService.ragChat(question).then(resp => {
            setResponse(resp);
        });
    }

    return (
        <div className="p-m">
            <h3> Chat bot</h3>
            <div>
                <TextField style={{width: '80%'}} onChange={(e=>setQuestion(e.target.value))}/>
                <Button theme="primary"></Button>
            </div>
        </div>
    );
}
