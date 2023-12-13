package Package_Integrador;

public class Turma {
	
	private String turma;
	private String nomeprof;
	private String unidade;

	public Turma(String turma, String nomeprof, String unidade) {
		this.turma = turma;
		this.nomeprof = nomeprof;
		this.unidade = unidade;
	}

	public String getTurma() {
		return turma;
	}

	public void setTurma(String turma) {
		this.turma = turma;
	}

	public String getNomeprof() {
		return nomeprof;
	}

	public void setNomeprof(String nomeprof) {
		this.nomeprof = nomeprof;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}
}