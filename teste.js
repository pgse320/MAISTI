class TreinoDePeito {
    constructor (exercicio1, exercicio2, exercicio3, exercicio4, exercicio5){
        this.exercicio1 = exercicio1;
        this.exercicio2 = exercicio2;
        this.exercicio3 = exercicio3;
        this.exercicio4 = exercicio4;
        this.exercicio5 = exercicio5;
        console.log ("\n\n TREINÃO DE PEITO", "\nExercício 1: ", exercicio1 ,"\nExercício 2: ", exercicio2 , "\nExercício 3: ", exercicio3 , "\nExercício 4: ", exercicio4 , "\nExercício 5: ", exercicio5);
    }

}
   
let meuTreino = new TreinoDePeito("Supino Inclinado - 3x12", "Rex Press - 3x12", "Paralelas - 3x12", "Supino Reto - 3x12", "Voador - 3x12");