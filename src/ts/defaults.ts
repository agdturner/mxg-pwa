import { mapToString } from "./util";
import { getAttributes, getSingularElement } from "./xml";

/**
 * Defaults are stored in a defaults.xml file. MESMER version 7.0 has the following:
 * <me:activationEnergy units="kJ/mol" default="NEEDS TO BE CHECKED**">0.0</me:activationEnergy>
 * <me:preExponential default="NEEDS TO BE CHECKED**">6.00e-12</me:preExponential>
 * <property dictRef="me:spinMultiplicity" default="true">
 *  <scalar>1</scalar>
 * </property>
 * <property dictRef="me:symmetryNumber" default="true">
 *  <scalar>1</scalar>
 * </property>
 * <property dictRef="me:frequenciesScaleFactor" default="true">
 *  <scalar>1</scalar>
 * </property>
 * <property dictRef="me:epsilon" default="true">
 *  <scalar>50.0</scalar>
 * </property>
 * <property dictRef="me:sigma" default="true">
 *  <scalar>5.0</scalar>
 * </property>
 * <me:deltaEDown default="NEEDS TO BE CHECKED**">130.0</me:deltaEDown>
 * <property dictRef="me:deltaEDownTExponent" default="true">
 *  <scalar referenceTemperature="298">0.0</scalar>
 * </property>
 * <molecule spinMultiplicity="1" default="true"/>
 * <molecule me:type="deficientReactant excessReactant modelled transitionState sink"
 *           default="is unsatisfactory. Choose one from list: "></molecule>
 * <molecule role="deficientReactant excessReactant modelled transitionState sink"
 *           default="is unsatisfactory. Choose one from list: "></molecule>
 * <property dictRef="me:MW" default="IS UNSATISFACTORY. A VALUE NEEDS TO BE PROVIDED**">
 *  <scalar>0.0</scalar>
 * </property>
 * <me:MCRCMethod default="NEEDS TO BE CHECKED. COULD BE** " name="RRKM"/>
 * <me:DOSCMethod default="true" name="ClassicalRotors"/>
 * <me:DOSCType default="true">external</me:DOSCType>
 * <me:DistributionCalcMethod default="true" name="Boltzmann"/>
 * <me:excessReactantConc default="NEEDS TO BE CHECKED**">2.25e+16</me:excessReactantConc>
 * <me:PTpair units="PPCC" precision="d" P="1.01E17" T="299" timeUnits ="microsec" default="true"/>
 * <me:PTset units="PPCC" precision="d" default="true"/>
 * <me:bathgas default="true">He</me:bathgas>
 * <me:TInfinity default="true">298</me:TInfinity>
 * <me:grainSize units="cm-1" default="true">100</me:grainSize>
 * <me:energyAboveTheTopHill units="kT" default="true">25</me:energyAboveTheTopHill>
 * <me:calcMethod default="true" name="simpleCalc"/>
 * <me:fittingTolerance default="true">0.01</me:fittingTolerance>
 * <me:fittingIterations default="true">10</me:fittingIterations>
 * <me:energyTransferModel name="ExponentialDown" default="true"/>
 * <me:FragmentDist name="Prior" default="true"/>
 * <me:MarquardtDerivDelta default="true">1.e-03</me:MarquardtDerivDelta>
 * <me:MarquardtTolerance default="true">1.e-03</me:MarquardtTolerance>
 * <me:MarquardtLambda default="true">1.0</me:MarquardtLambda>
 * <me:MarquardtLambdaScale default="true">10.0</me:MarquardtLambdaScale>
 * <me:ConstraintFactor default="true">1.0</me:ConstraintFactor>
 * <me:ConstraintAddand default="true">0.0</me:ConstraintAddand>
 * <me:sensitivityAnalysisSamples default="true">256</me:sensitivityAnalysisSamples>
 * <me:sensitivityGenerateData default="true">true</me:sensitivityGenerateData>
 * <me:chebMinConc units="particles per cubic centimeter" default="true"/>
 * <me:calcMethod units="kJ/mol" default="true"/>
 * <me:Tmin default="true">200</me:Tmin>
 * <me:Tmax default="true">1500</me:Tmax>
 * <me:Tstep default="true">50</me:Tstep>
 * <me:Tmid default="true">1000</me:Tmid>
 * <me:shortestTimeOfInterest default="true">1.0e-11</me:shortestTimeOfInterest>
 * <me:MaximumEvolutionTime default="true">1.0e+05</me:MaximumEvolutionTime>
 * <me:errorPropagationSamples default="true">300</me:errorPropagationSamples>
 * <property dictRef="me:Hf298">
 *  <scalar units="kJ/mol" default="true"/>
 * </property>
 * <property dictRef="me:Hf0">
 *  <scalar units="kJ/mol" default="true"/>
 * </property>
 * <property dictRef="me:ZPE">
 *  <scalar units="kJ/mol" default="true"/>
 * </property>
 * <me:RMS_SOC_element units="cm-1" default="true">10.0</me:RMS_SOC_element>
 * <me:GradientDifferenceMagnitude units="a.u./Bohr" default="true">0.1</me:GradientDifferenceMagnitude>
 * <me:GradientReducedMass units="a.m.u." default="true">16.0</me:GradientReducedMass>
 * <me:AverageSlope units="a.u./Bohr" default="true">0.1</me:AverageSlope>
 * <me:ForceMacroDetailedBalance default="true">true</me:ForceMacroDetailedBalance>
 * <me:testMicroRates Tmin = "100" Tmax = "2000" Tstep = "100" default="true"/>
 * <me:experimentalRate error ="0.0" default="true"/>
 */
export class Defaults {

    /**
     * TagName.
     */
    public static tagName = 'defaults';

    /**
     * @param defaults The defaults.
     */
    constructor() {
        // Create a file input element to prompt the user to select the default.xml file.
        let input: HTMLInputElement = document.createElement('input');
        input.type = 'file';
        input.onchange = function () {
            if (input.files) {
                for (let i = 0; i < input.files.length; i++) {
                    console.log("inputElement.files[" + i + "]=" + input.files[i]);
                }
                let file: File | null = input.files[0];
                //console.log("file=" + file);
                console.log(file.name);
                let inputFilename: string = file.name;
                let reader = new FileReader();
                let chunkSize = 1024 * 1024; // 1MB
                let start = 0;
                let contents = '';
                reader.onload = function (e) {
                    if (e.target == null) {
                        throw new Error('Event target is null');
                    }
                    contents += (e.target as FileReader).result as string;
                    if (file != null) {
                        if (start < file.size) {
                            // Read the next chunk
                            let blob = file.slice(start, start + chunkSize);
                            reader.readAsText(blob);
                            start += chunkSize;
                        } else {
                            // All chunks have been read
                            contents = contents.trim();
                            console.log('contents ' + contents);
                            let parser = new DOMParser();
                            let xml: Document = parser.parseFromString(contents, "text/xml");
                            parse(xml);
                        }
                    }
                };
                // Read the first chunk
                let blob = file.slice(start, start + chunkSize);
                reader.readAsText(blob);
                start += chunkSize;
            }
        };
        input.click();
    }
}


function parse(xml: Document): void {

    // Process the XML.
    let xml_defaults: Element = getSingularElement(xml, Defaults.tagName);
    let attributes: Map<string, string> = getAttributes(xml_defaults);
    console.log(mapToString(attributes));

}