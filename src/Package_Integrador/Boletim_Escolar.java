package Package_Integrador;

import java.io.*;
import java.util.*;

public class Boletim_Escolar {
	
	static ArrayList<Turma> turma = new ArrayList<>();
	static ArrayList<Aluno> alunos = new ArrayList<>();

	static float MediaGeral;
	static int AcimaMedia;
	static int AbaixoMedia;
	static String MaiorAluno;
	static String MenorAluno;
	static float MaiorMedia;
	static float MenorMedia;
	static String MelhorAluno;
	static float Temp = -Float.MAX_VALUE;
	
	public static void main (String[] args) {

		Turma boletimTurma = addInfoTurma();
		turma.add(boletimTurma);
		
		for (int i = 0; i < 5; i++) {
			Aluno boletimAluno = addInfoAluno(i);
			alunos.add(i, boletimAluno);
		}
		
		float SomaMedia = 0;
		
		for (int i = 0; i < alunos.size(); i++) {
			SomaMedia += alunos.get(i).getMedia();
			MediaGeral = SomaMedia / alunos.size();
		}
		
		for (int i = 0; i < alunos.size(); i++) {
		    updateMediaContador(alunos.get(i).getMedia(), MediaGeral);
		    updateMinMaxMedia(alunos.get(i), i);
		    updateMelhorAluno(alunos.get(i));
		}
		
		System.out.println("Turma: " + turma.get(0).getTurma());
		System.out.println("Unidade Curricular: " + turma.get(0).getUnidade());
		System.out.println("Nome do Professor: " + turma.get(0).getNomeprof());

	 	for (int i = 0; i < alunos.size(); i++) {
			System.out.println("\nNome do Aluno: " + alunos.get(i).getNomealuno());
			System.out.println("Notas: " + Arrays.toString(alunos.get(i).getNotas()));
			System.out.println("Média: " + String.format("%.1f", alunos.get(i).getMedia()));
			System.out.println("Faltas: " + alunos.get(i).getFaltas());
			System.out.println("Situação do Aluno: " + alunos.get(i).getSituacao());
	 	}
	 	   
		System.out.println("\nMedia Geral da Turma: " + String.format("%.1f", MediaGeral));
		System.out.println("Quantidade de alunos acima da média: " + AcimaMedia);
		System.out.println("Quantidade de alunos abaixo da média: " + AbaixoMedia);
		System.out.println("Aluno com a Maior Media: " + MaiorAluno);
		System.out.println("Aluno com a Menor Media: " + MenorAluno);
		System.out.println("Melhor Aluno da Turma: " + MelhorAluno);
		
		salvarProduto();
	}
	
	private static Turma addInfoTurma() {
		Scanner scn = new Scanner(System.in);
		String NomeTurma = null;
		String NomeUnidade = null;
		String NomeProfessor = null;
		
		while (true) {
			try {
				System.out.print("Digite o nome da turma do alun@: ");
				NomeTurma = getNomeInput();
				
				System.out.print("\nDigite o nome da Unidade Curricular: ");
				NomeUnidade = getNomeInput();
				
				System.out.print("\nDigite o nome do profesor que leciona esta Unidade Curricular: ");
				NomeProfessor = getNomeInput();
				
				break;
				
			} catch (Validacao e){
	        	System.out.println(e.getMessage());
	        }
		}
	
		return new Turma(NomeTurma, NomeUnidade, NomeProfessor);
	}
	
	private static Aluno addInfoAluno(int index) {
		Scanner scn = new Scanner(System.in);
		String NomeAluno = null;
		int[] Notas = new int[4];
		float MediaAluno = 0;
		int Faltas = 0;
        String Situacao = null;
		
        while (true) {
	        try {
	        	System.out.print("\nDigite o nome do Aluno n° " + (index + 1) + ": ");
	            NomeAluno = getNomeInput();
	
	            System.out.print("\nDigite as 4 notas bimestrais (de 0 a 100) do aluno: ");
	        	for (int i = 0; i < 4; i++) {
	        		Notas[i] = getNotaInput();
	        	}
	        
		        MediaAluno = calculateMedia(Notas);
		
		        System.out.print("\nDigite o número de faltas (de 0 a 10) do aluno: ");      
		        Faltas = getFaltasInput();
		
		        break;
		        
	        } catch (Validacao e){
	        	System.out.println(e.getMessage());
	        }
		}
        
        if (MediaAluno >= 70 && Faltas < 2) {
        	Situacao = "Aprovado";
		} else if (MediaAluno >= 50 && Faltas < 5) {
			Situacao = "Recuperação";
		} else {
			Situacao = "Reprovado";
		}
	
        return new Aluno(NomeAluno, Notas, MediaAluno, Faltas, Situacao);
	}
	
	public static float calculateMedia(int[] NotaDeCadaAluno) {
        float SomaNotas = 0;

        for (int Nota : NotaDeCadaAluno) {
            SomaNotas += Nota;
        }

        return SomaNotas / 4;
    }
	
	private static void updateMediaContador(float media, float mediageral) {
		if (media >= mediageral) {
	        AcimaMedia++;	        
	    } else {
	        AbaixoMedia++;
	    }
	}

	private static void updateMinMaxMedia(Aluno aluno, int index) {
		float media = aluno.getMedia();
		
	    if (index == 0) {
	        MaiorMedia = media;
	        MenorMedia = media;
	    }
	    
	    if (media > MaiorMedia) {
	        MaiorMedia = media;
	    	MaiorAluno = aluno.getNomealuno();
	    } else if (media < MenorMedia) {
	        MenorMedia = media;
	    	MenorAluno = aluno.getNomealuno();
	    }
	}

	private static void updateMelhorAluno(Aluno aluno) {
		
	    float Pontos = (aluno.getMedia() / 10) - (float) aluno.getFaltas();
	    
	    if (Pontos > Temp) {
	        Temp = Pontos;
	        MelhorAluno = aluno.getNomealuno();
	    }
	}
	
	private static String getNomeInput() throws Validacao {
    	Scanner scn = new Scanner(System.in);
    	
        try {
        	String input = scn.nextLine().trim();
        	
            if (input.isEmpty()) {
                throw new Validacao("Entrada vazia. Favor digite um nome.\n");
            }
            
            return input;
            
        } catch (Exception e) {
            throw new Validacao("Um erro inesperado ocorreu. Tente novamente\n");		
        }
    }

    private static int getNotaInput() throws Validacao {
    	Scanner scn = new Scanner(System.in);
    	
	    try {
	    	String inputStr = scn.nextLine().trim();
	    	
	        if (inputStr.isEmpty()) {
	            throw new Validacao("Entrada vazia. Favor digite um valor.\n");
	        }
	        
	        int input = Integer.parseInt(inputStr);
	
	        if (input < 0 || input > 100) {
	        	throw new Validacao("Fora do alcance. Favor digite um número entre 0 a 100.\n");
	        }
	        
	        return input;
	        
	    } catch (NumberFormatException e) {
	        throw new Validacao("Valor inválido. Favor digite um número valido.\n");		
        
	    } catch (Exception e) {
	    	throw new Validacao("Um erro inesperado ocorreu. Tente novamente\n");		        
	    }
    }
    
    private static int getFaltasInput() throws Validacao {
    	Scanner scn = new Scanner(System.in);
    	
        try {
        	String inputStr = scn.nextLine().trim();
        	
            if (inputStr.isEmpty()) {
                throw new Validacao("Entrada vazia. Favor digite um valor.\n");
            }
            
            int input = Integer.parseInt(inputStr);

            if (input < 0 || input > 10) {
            	throw new Validacao("Fora do alcance. Favor digite um número entre 0 a 10.\n");
            }
            
            return input;
            
        } catch (NumberFormatException e) {
            throw new Validacao("Valor inválido. Favor digite um número valido.\n");		
            
        } catch (Exception e) {
        	throw new Validacao("Um erro inesperado ocorreu. Tente novamente\n");
        }
    }
    
	public static void salvarProduto() {

		try (BufferedWriter escrever = new BufferedWriter(new FileWriter("C:\\Users\\CT Desenvolvimento\\Documents\\boletimPI.txt", true))) {
	    	escrever.write("Turma: " + turma.get(0).getTurma());
	    	escrever.newLine();
	    	   
	    	escrever.write("Unidade Curricular: " + turma.get(0).getUnidade());
	    	escrever.newLine();
	    	   
	    	escrever.write("Nome do Professor: " + turma.get(0).getNomeprof());
	    	escrever.newLine();
	    	escrever.newLine();
           
        
        	   
	    	for (int i = 0; i < alunos.size(); i++) {
        		escrever.write("Nome do Aluno: " + alunos.get(i).getNomealuno());
        		escrever.newLine();
        	   
        		escrever.write("Notas: " + Arrays.toString(alunos.get(i).getNotas()));
        		escrever.newLine();
        	   
        		escrever.write("Média: " + String.format("%.1f", alunos.get(i).getMedia()));
        		escrever.newLine();
        		
        		escrever.write("Faltas: " + alunos.get(i).getFaltas());
        		escrever.newLine();
        	   
        		escrever.write("Situação do Aluno: " + alunos.get(i).getSituacao());
        		escrever.newLine();
        		escrever.newLine();
        	}
        	   
        	   
      
        	escrever.write("Media Geral da Turma: " + String.format("%.1f", MediaGeral));
        	escrever.newLine();
        	escrever.write("Quantidade de alunos acima da média: " + AcimaMedia);
        	escrever.newLine();
        	escrever.write("Quantidade de alunos abaixo da média: " + AbaixoMedia);
        	escrever.newLine();
        	escrever.write("Aluno com a Maior Media: " + MaiorAluno);
        	escrever.newLine();
        	escrever.write("Aluno com a Menor Media: " + MenorAluno);
        	escrever.newLine();
        	escrever.write("Melhor Aluno da Turma: " + MelhorAluno);
        	escrever.newLine();
        	escrever.newLine();
        	escrever.write("-----------------------------------------------------");
        	escrever.newLine();
        	escrever.newLine();

            System.out.println("\n\nDados gravados com sucesso no arquivo!");
               
    	} catch (IOException e) {
    		e.printStackTrace();
          }
    }
}