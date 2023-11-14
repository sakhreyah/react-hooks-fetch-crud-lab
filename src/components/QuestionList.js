import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {
  const [qs, setQs] = useState()
  function handleDeleteItem(deletedItem) {
    const updatedItems = qs.filter((item) => item.id !== deletedItem.id);
    setQs(updatedItems);
  }
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then(data => setQs(data))
  }, [])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{qs ? qs.map((q => <QuestionItem key={q.id} question={q} onDeleteItem={handleDeleteItem} />)) : null}</ul>
    </section>
  );
}

export default QuestionList;
