import React, { useEffect, useState } from "react";
import GoalCard from "./GoalCard";

const Donate = () => {
    const [goals, setGoals] = useState([]);
    const [loadingGoals, setLoadingGoals] = useState(true);

    async function fetchGoals() {
        try {
            //TODO change out the URL for a URL derived from an env variable
            const response = await fetch("http://localhost:3000/goals", {
                method: "GET",
            });
            const json = await response.json();

            setGoals(json);
        } catch (err) {
            console.error("error: ", err);
        }
    }

    useEffect(() => {
        setLoadingGoals(true);
        //setGoals(goalData);
        fetchGoals();
    }, []);

    return (
        <div>
            {goals.map(
                ({
                    bitcoinAddr,
                    goalAmount,
                    postDateUTC,
                    title,
                    _id,
                    description,
                }) => {
                    return (
                        <GoalCard
                            key={_id}
                            id={_id}
                            title={title}
                            addr={bitcoinAddr}
                            desc={description}
                            goalAmount={goalAmount}
                            startDateUTC={postDateUTC}
                        ></GoalCard>
                    );
                }
            )}
        </div>
    );
};

export default Donate;
