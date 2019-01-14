<?php
// **********************************************************************
//
// Copyright (c) 2003-2017 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.7.0
//
// <auto-generated>
//
// Generated from file `IMeshBuilder.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//


namespace
{
    require_once 'Cryosoft.php';
}

namespace Cryosoft\MeshBuilder
{
    global $Cryosoft_MeshBuilder__t_IMeshBuilder;
    global $Cryosoft_MeshBuilder__t_IMeshBuilderPrx;

    class IMeshBuilderPrxHelper
    {
        public static function checkedCast($proxy, $facetOrContext=null, $context=null)
        {
            return $proxy->ice_checkedCast('::Cryosoft::MeshBuilder::IMeshBuilder', $facetOrContext, $context);
        }

        public static function uncheckedCast($proxy, $facet=null)
        {
            return $proxy->ice_uncheckedCast('::Cryosoft::MeshBuilder::IMeshBuilder', $facet);
        }

        public static function ice_staticId()
        {
            return '::Cryosoft::MeshBuilder::IMeshBuilder';
        }
    }

    $Cryosoft_MeshBuilder__t_IMeshBuilder = IcePHP_defineClass('::Cryosoft::MeshBuilder::IMeshBuilder', '\\Cryosoft\\MeshBuilder\\IMeshBuilder', -1, false, true, $Ice__t_Value, null);

    $Cryosoft_MeshBuilder__t_IMeshBuilderPrx = IcePHP_defineProxy('::Cryosoft::MeshBuilder::IMeshBuilder', $Ice__t_ObjectPrx, null);

    IcePHP_defineOperation($Cryosoft_MeshBuilder__t_IMeshBuilderPrx, 'MBMeshBuild', 0, 0, 0, array(array($Cryosoft__t_stSKConf)), null, array($IcePHP__t_long), null);
}
?>