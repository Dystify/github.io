// ConvertInfo : FairlyLinguist 1.6.0.0 - 2016/08/04 10:00:47
{
  var objTOC = new TocObject();
  objTOC.setTitle("SDEV Quick Start<br /> - Private - ");
  objTOC.setWindowTitle("SDEV Quick Start - Private - ");
  objTOC.disablePrintPage();
  objTOC.setSelectPackageEnabled(false);
  objTOC.setInsertTitlePage(true);
  objTOC.disableDisplayNumber();
  objTOC.disableViewFileIcon();
  objTOC.setBaselevel(0);
  objTOC.setSearchEnabled(true);
  objTOC.setLogoFile("template/img/logo.png");

// 1 Introduction
  objTOC.addHeader("ID_97625157", 0, "1 Introduction", "Pages/Page_97625157.html", "", false, "001");

// 2 SDEV Operating Environment
  objTOC.addHeader("ID_96563916", 0, "2 SDEV Operating Environment", "Pages/Page_96563916.html", "", false, "002");

// 3 Preparing the SDEV
  objTOC.addHeader("ID_123535845", 0, "3 Preparing the SDEV", "Pages/Page_123535845.html", "", false, "003");

// 4 Preparing Nintendo Dev Interface
  objTOC.addHeader("ID_96563737", 0, "4 Preparing Nintendo Dev Interface", "Pages/Page_96563737.html", "", false, "004");

// 5 Preparing NintendoSDK
  objTOC.addHeader("ID_96563581", 0, "5 Preparing NintendoSDK", "Pages/Page_96563581.html", "", false, "005");

// 6 Initializing the SDEV
  objTOC.addHeader("ID_96563591", 0, "6 Initializing the SDEV", "Pages/Page_96563591.html", "", false, "006");

// 7 Preparing the JOY-CONs
  objTOC.addHeader("ID_124920044", 0, "7 Preparing the JOY-CONs", "Pages/Page_124920044.html", "", false, "007");

// 8 Building and Running NX Applications (For Developers)
  objTOC.addHeader("ID_96565538", 0, "8 Building and Running NX Applications (For Developers)", "Pages/Page_96565538.html", "", false, "008");

// 9 Running NX Applications (For Non-Developers)
  objTOC.addHeader("ID_96563598", 0, "9 Running NX Applications (For Non-Developers)", "Pages/Page_96563598.html", "", false, "009");


  objTOC.addHeader("HISTORY", 0, "Revision History", "history.html", "", false, "999");

  objTOC.processTreeData();
  Reassemble.objectTocData = objTOC;
}
