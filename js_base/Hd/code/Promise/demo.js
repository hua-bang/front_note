async function checkTemplate() {
    for (let i = 0; i < this.sendExamData.length; i++) {
        let sendI = {
            id: this.courseId,
            exam: this.sendExamData[i],
            data: JSON.stringify(this.sendData[i])
        }
        let res = await api.setScore(sendI);
        console.log(res);
    }
}