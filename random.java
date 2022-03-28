package edu.kill3r.infosec;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MainActivity extends AppCompatActivity {

    String username, password;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        try {
            username = user();
        } catch (Exception e) {
            e.printStackTrace();
        }
        try {
            password = pass();
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("Username : " + username);
        System.out.println("Password : " + password);

    }

    private static String SHA1(byte[] paramArrayOfByte) throws NoSuchAlgorithmException {
        return base16encode(MessageDigest.getInstance("SHA-1").digest(paramArrayOfByte));
    }

    public static String user() throws Exception {
        return base16encode(getData()).substring(0, 12);
    }

    public static String pass() throws Exception {
        return base16encode(getData()).substring(12, 24);
    }

    private static String base16encode(byte[] paramArrayOfByte) {
        String str = "";
        int j = paramArrayOfByte.length;
        for (int i = 0; i < j; i++) {
            str = String.format("%s%02x", str, Byte.valueOf(paramArrayOfByte[i]));
        }
        return str;
    }

    private static byte[] getData() throws Exception {
        byte[] arrayOfByte1 = parseHexString("aa153b5d1fcb55556034df7a2756444297f195d2", 20);
        byte[] arrayOfByte2 = parseHexString("53edd6990376d4455512d2b5556613ca2567f04c", 20);
        byte[] arrayOfByte3 = parseHexString("c4495a00bf20b05edea559992144423d805bd319", 20);
        return xor(h(add(xor(xor(h(add(arrayOfByte1, h(add(arrayOfByte2, h(arrayOfByte3))))), arrayOfByte3), arrayOfByte2), arrayOfByte1)), arrayOfByte3);
    }

    private static byte[] h(byte[] paramArrayOfByte) throws Exception {
        return parseHexString(SHA1(paramArrayOfByte), 20);
    }

    private static byte[] parseHexString(String paramString, int paramInt) {
        byte[] arrayOfByte = new byte[paramInt];
        for (int i = 0; i < paramInt; i++) {
            arrayOfByte[i] = (byte) Integer.parseInt(paramString.substring(i * 2, (i * 2) + 2), 16);
        }
        return arrayOfByte;
    }

    private static byte[] xor(byte[] paramArrayOfByte1, byte[] paramArrayOfByte2) {
        int j = paramArrayOfByte1.length;
        if (j != paramArrayOfByte2.length) {
            return null;
        }
        byte[] arrayOfByte = new byte[j];
        for (int i = 0; i < j; i++) {
            arrayOfByte[i] = (byte) (paramArrayOfByte1[i] ^ paramArrayOfByte2[i]);
        }
        return arrayOfByte;
    }

    private static byte[] add(byte[] paramArrayOfByte1, byte[] paramArrayOfByte2) {
        byte[] arrayOfByte = new byte[(paramArrayOfByte1.length + paramArrayOfByte2.length)];
        System.arraycopy(paramArrayOfByte1, 0, arrayOfByte, 0, paramArrayOfByte1.length);
        System.arraycopy(paramArrayOfByte2, 0, arrayOfByte, paramArrayOfByte1.length, paramArrayOfByte2.length);
        return arrayOfByte;
    }
}