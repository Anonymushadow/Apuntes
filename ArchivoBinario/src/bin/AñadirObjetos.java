package bin;

import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.OutputStream;

public class AñadirObjetos extends ObjectOutputStream{

    public AñadirObjetos(OutputStream out) throws IOException {
        super(out);
    }

    public AñadirObjetos() throws IOException, SecurityException {
    }
    
    @Override
    public void writeStreamHeader() throws IOException{
        reset();
    }
}
