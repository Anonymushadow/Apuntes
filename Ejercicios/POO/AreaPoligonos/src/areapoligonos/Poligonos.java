package areapoligonos;
public abstract class Poligonos {
    protected int lados;

    public Poligonos(int lados) {
        this.lados = lados;
    }

    public int getLados() {
        return lados;
    }

    @Override
    public String toString() {
        return "Poligonos:\n" + "Lados: " + lados;
    }
    
    //declaramos area como abstracto
    public abstract double area();
    
}
