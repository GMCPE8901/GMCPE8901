import { world, DynamicPropertiesDefinition } from "@minecraft/server";

// Dynamic Property System
world.events.worldInitialize.subscribe(({ propertyRegistry }) => {
  // Dynamic Property Set
  let defSystem = new DynamicPropertiesDefinition()
  let defBase = new DynamicPropertiesDefinition()

  // Dynamic Property Declaration
  defSystem.defineString("systemDB", 5000);
  defBase.defineString("baseDB", 5000);

  // Target Dynamic Property
  propertyRegistry.registerWorldDynamicProperties(defSystem);
  propertyRegistry.registerWorldDynamicProperties(defBase);

})

function _BasesetData(Identity, Value) {
  if (!world.getDynamicProperty("baseDB")) {
    world.setDynamicProperty("baseDB", "{}");
  }
  let baseDB = JSON.parse(world.getDynamicProperty("baseDB"));
  if (baseDB[Identity]) {
    baseDB[Identity] = Value;
    world.setDynamicProperty("baseDB", JSON.stringify(baseDB))
    return { return: 1, error: "Variable successfully to update !", data: baseDB[Identity] };
  } else {
    baseDB[Identity] = Value;
    world.setDynamicProperty("baseDB", JSON.stringify(baseDB))
    return { return: 0, error: "Variable successfully to set !", data: baseDB[Identity] };
  }
};

function _BasegetData(Identity) {
  if (!world.getDynamicProperty("baseDB")) {
    world.setDynamicProperty("baseDB", "{}");
  }
  let baseDB = JSON.parse(world.getDynamicProperty("baseDB"));
  if (baseDB[Identity]) {
    return { return: 1, error: "Variable found to get !", data: baseDB[Identity] };
  } else {
    return { return: 0, error: "Variable not found to get !", data: null };
  }
}

function _BasedelData(Identity) {
  if (!world.getDynamicProperty("baseDB")) {
    world.setDynamicProperty("baseDB", "{}");
  }
  let baseDB = JSON.parse(world.getDynamicProperty("baseDB"));
  if (baseDB[Identity]) {
    delete baseDB[Identity];
    world.setDynamicProperty("baseDB", JSON.stringify(baseDB))
    return { return: 1, error: "Variable successfully to delete !", data: baseDB[Identity] };
  } else {
    return { return: 0, error: "Variable failed to delete !", data: null };
  }
}

export const baseDB = { setData = _BasedelData, getData = _BasegetData, delData = _BasesetData };

function _SystemsetData(Identity, Value) {
  if (!world.getDynamicProperty("systemDB")) {
    world.setDynamicProperty("systemDB", "{}");
  }
  let systemDB = JSON.parse(world.getDynamicProperty("systemDB"));
  if (systemDB[Identity]) {
    systemDB[Identity] = Value;
    world.setDynamicProperty("systemDB", JSON.stringify(systemDB))
    return { return: 1, error: "Variable successfully to update !", data: systemDB[Identity] };
  } else {
    systemDB[Identity] = Value;
    world.setDynamicProperty("systemDB", JSON.stringify(systemDB))
    return { return: 0, error: "Variable successfully to set !", data: systemDB[Identity] };
  }
};

function _SystemgetData(Identity) {
  if (!world.getDynamicProperty("systemDB")) {
    world.setDynamicProperty("systemDB", "{}");
  }
  let systemDB = JSON.parse(world.getDynamicProperty("systemDB"));
  if (systemDB[Identity]) {
    return { return: 1, error: "Variable found to get !", data: systemDB[Identity] };
  } else {
    return { return: 0, error: "Variable not found to get !", data: null };
  }
}

function _SystemdelData(Identity) {
  if (!world.getDynamicProperty("systemDB")) {
    world.setDynamicProperty("systemDB", "{}");
  }
  let systemDB = JSON.parse(world.getDynamicProperty("systemDB"));
  if (systemDB[Identity]) {
    delete systemDB[Identity];
    world.setDynamicProperty("systemDB", JSON.stringify(systemDB))
    return { return: 1, error: "Variable successfully to delete !", data: systemDB[Identity] };
  } else {
    return { return: 0, error: "Variable failed to delete !", data: null };
  }
}

export const systemDB = { setData = _SystemsetData, getData = _SystemgetData, delData = _SystemdelData };