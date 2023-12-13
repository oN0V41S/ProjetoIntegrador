package Package_Integrador;

public class Aluno { 
		
		private String nomealuno;
		private int[] notas = new int[4];
		private float media;
		private int faltas;
		private String situacao;
		
		public Aluno(String nomealuno, int[] notas, float media, int faltas, String situacao) {
			this.nomealuno = nomealuno;
		    this.notas = notas;
			this.media = media;
			this.faltas = faltas;
			this.situacao = situacao;
		}
		
		public String getNomealuno() {
			return nomealuno;
		}

		public void setNomealuno(String nomealuno) {
			this.nomealuno = nomealuno;
		}

		public int[] getNotas() {
			return notas;
		}

		public void setNotas(int[] notas) {
				this.notas = notas;
		}
		
		public float getMedia() {
			return media;
		}

		public void setMedia(float media) {
			this.media = media;
		}

		public int getFaltas() {
			return faltas;
		}

		public void setFaltas(int faltas) {
			this.faltas = faltas;
		}
		
		public String getSituacao() {
			return situacao;
		}

		public void setSituacao(String situacao) {
			this.situacao = situacao;
		}
}
