// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
package demo;

import org.microfocus.sv.api.SvClient;

public class MiBand2 {

    public static void main(String[] args) throws Exception {

        // initialize virtual lab
        SvClient sv = SvClient.newInstance();
        try {
            sv.loadActiveVirtualLab("classpath:/sv-lab.json", sv.compileModuleFromSources("classpath:/demo/*"), true);
            sv.startActiveVirtualLab();

            // start the application scenario
            sv.runSimulation(args.length == 0 ? "capture" : args[0]);

            System.out.println("Press <Enter> to quit simulation.");
            System.in.read();
        } finally {
            // release resources
            sv.close();
        }
    }
}
